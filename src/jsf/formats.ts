
export default function register(jsf: any) {
  return jsf.format({
    semver() {
      return jsf.random.randexp('\\d\\.\\d\\.[1-9]\\d?')
    }
  })
}