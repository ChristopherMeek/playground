import { ActorRefFrom } from 'xstate'
import { MachineContext } from './machine-context'
import { useAvailability, useMachineVM, useNameTab } from './machine-vm'
import { Tab } from '@headlessui/react'
import { tabMachine } from './tab-machine'

export function MachineTesting() {
  return <MachineContext.Provider><Internal /></MachineContext.Provider>
}

function Internal() {
  const { fetch, fetchDisabled, person } = useMachineVM()  

  return <div>
    <button type="button" onClick={fetch} disabled={fetchDisabled}>Fetch</button>

    {person ? <Tabby /> : null}
  </div>
}

function Tabby() {
  const { name, age } = useAvailability()
  return <Tab.Group>
    <Tab.List>
      <Tab disabled={!name}>Name</Tab>
      <Tab disabled={!age}>Age</Tab>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>
        <NameTab />
      </Tab.Panel>
      <Tab.Panel>
        <AgeTab />
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
}

function NameTab() {
  const { name, makeDirty } = useNameTab()

  return <div>
    <label>Name<input type="text" defaultValue={name} onChange={makeDirty} /></label>
  </div>
}

function AgeTab() {
  const age = MachineContext.useSelector(x => x.context.person!.age)
  const ageActor = MachineContext.useSelector(x => x.children.age as ActorRefFrom<typeof tabMachine>)

  return <div>
    <label>Age<input type="number" defaultValue={age} /></label>
    {JSON.stringify(ageActor.getSnapshot().value)}
  </div>
}