export type Person = { id: number, name: string, age: number }

export function fetchPerson() : Promise<Person> {
  return new Promise((res) => {
    setTimeout(() => res({ id: 1, name: 'Adrian', age: 43_999}),1500)
  })
}