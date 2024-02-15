import { sendParent, setup } from 'xstate'

export const tabMachine = setup({
  types: {} as {
    events: { type: 'make-dirty' } | { type: 'make-clean' } | { type: 'disable' }
  }
}).createMachine({
  type: 'parallel',
  states: {
    cleanliness: {
      initial: 'clean',
      states: {
        clean: {
          on: {
            'make-dirty': {
              target: 'dirty',
              actions: sendParent({ type: 'name-dirty' })
            }
          }
        },
        dirty: {
          on: {
            'make-clean': 'clean'
          }
        }
      }
    },
    availability: {
      initial: 'enabled',
      states: {
        enabled: {
          on: {
            disable: 'disabled'
          }
        },
        disabled: {

        }
      }
    }
  }
})