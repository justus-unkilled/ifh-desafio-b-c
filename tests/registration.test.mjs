import test from 'node:test';
import assert from 'node:assert/strict';
import { registrationUrl, REGISTRATION_URL } from '../lib/registration-url.ts';

test('preserva a rota oficial e a âncora sem campanha', () => {
  assert.equal(registrationUrl(''), REGISTRATION_URL);
});
test('preserva as seis UTMs sem alterar origem, caminho ou hash', () => {
  const incoming = new URLSearchParams({
    utm_source: 'Meta',
    utm_medium: 'paid social',
    utm_campaign: 'Desafio outubro',
    utm_content: 'Médicos & família',
    utm_term: 'perícia médica',
    utm_id: 'L19',
  });
  const output = new URL(registrationUrl('?' + incoming));
  assert.equal(output.origin, 'https://institutofelipehurtado.com.br');
  assert.equal(output.pathname, '/v8-desafio/');
  assert.equal(output.hash, '#checkout');
  for (const [k, v] of incoming) assert.equal(output.searchParams.get(k), v);
});
test('ignora redirecionamentos, dados pessoais e parâmetros não autorizados', () => {
  const output = new URL(
    registrationUrl(
      '?utm_source=google&email=teste%40example.com&token=secret&redirect=https://example.com&gclid=123',
    ),
  );
  assert.equal(output.searchParams.toString(), 'utm_source=google');
  assert.equal(output.origin, new URL(REGISTRATION_URL).origin);
});
test('não injeta fragmentos, html ou separadores presentes nos valores', () => {
  const source = new URLSearchParams({
    utm_source: 'a#b&redirect=x',
    utm_content: '<script>1</script>',
  });
  const output = new URL(registrationUrl('?' + source));
  assert.equal(output.hash, '#checkout');
  assert.equal(output.searchParams.get('utm_source'), 'a#b&redirect=x');
  assert.equal(output.searchParams.has('redirect'), false);
  assert.equal(output.searchParams.get('utm_content'), '<script>1</script>');
});
test('ignora UTMs vazias e mantém a primeira ocorrência duplicada', () => {
  const output = new URL(
    registrationUrl('?utm_source=meta&utm_source=google&utm_medium='),
  );
  assert.equal(output.searchParams.toString(), 'utm_source=meta');
});
