// Preserve the existing official registration route; no lead data is collected here.
export const REGISTRATION_URL =
  'https://institutofelipehurtado.com.br/v8-desafio/#checkout';
const campaignKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
];
export function registrationUrl(search: string): string {
  const target = new URL(REGISTRATION_URL);
  const source = new URLSearchParams(search);
  for (const key of campaignKeys) {
    const value = source.get(key);
    if (value) target.searchParams.set(key, value);
  }
  return target.toString();
}
