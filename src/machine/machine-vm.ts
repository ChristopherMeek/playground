import { ActorRefFrom } from 'xstate'
import { MachineContext } from './machine-context'
import { tabMachine } from './tab-machine'
import { useState } from 'react'

export function useMachineVM() {
  const actor = MachineContext.useActorRef()
  const state = MachineContext.useSelector(x => x)

  return {
    fetch: () => actor.send({ type: 'fetch-person' }),
    fetchDisabled: !state.matches('idle'),
    person: state.context.person
  }
}

export function useNameTab() {
  const name = MachineContext.useSelector(x => x.context.person!.name)
  const nameActor = MachineContext.useSelector(x => x.children.name as ActorRefFrom<typeof tabMachine>)
  return { name, makeDirty: () => nameActor.send({ type: 'make-dirty' }) }
}

export function useAvailability() {
  const [availability, setAvailability] = useState({
    name: true,
    age: true
  })

  MachineContext.useSelector(x => x.children.name as ActorRefFrom<typeof tabMachine>).subscribe(nameState => {
    setAvailability(currentAvailability => ({ ...currentAvailability, name: nameState.matches({ "availability": "enabled" }) }))
  })

  MachineContext.useSelector(x => x.children.age as ActorRefFrom<typeof tabMachine>).subscribe(ageState => {
    setAvailability(currentAvailability => ({ ...currentAvailability, age: ageState.matches({ "availability": "enabled" }) }))
  })

  return availability
}
/*
export function useNameActor() {
  const personActor = MachineContext.useActorRef()  
  return useActorRef(personActor.system.get('name'))  
}

export function useAgeActor() {
  const personActor = MachineContext.useActorRef()
  return useActorRef(personActor.system.get('age'))
}
*/