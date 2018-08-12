export function tc(obj: { [key: string]: any }): { [key: string]: any } {
  let value: { [key: string]: any } = {};
  for (const k in obj) {
    value[k.replace(/[A-Z]/, s => "-" + s.toLowerCase())] = obj[k];
  }
  return value;
}

export function isStr(color: string | undefined) {
  return color ? `is-${color}` : "";
}
