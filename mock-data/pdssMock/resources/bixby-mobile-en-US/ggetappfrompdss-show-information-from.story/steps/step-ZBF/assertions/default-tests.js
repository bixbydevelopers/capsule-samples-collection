/**
 * Step assertions documentation
 * https://corp.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 *
 * This is an automatically generated assertion file.
 *
 * These are default tests that can be performed on any step in any story.
 * The expected values are filled-in automatically below, and no further
 * action is required.
 *
 * If a variable declaration name starts with EXPECTED, 
 * its assignment value might update later when this assertion fails.
 * Those changes only happen when you confirm them in the story editor.
 * Be careful about making manual edits here. If you change one of these
 * variable names, it will no longer be automatically tracked for you.
 *
 * To skip a test, change the function name from 'it' to 'xit'.
 */

describe('default tests', () => {
  const EXPECTED_TYPE_NAME = 'InstalledAppResult'
  const EXPECTED_DIALOG_MODE = ''
  const EXPECTED_SPEECH = ''
  const EXPECTED_DISPLAY = ''

  it(`type name matches "${EXPECTED_TYPE_NAME}"`, () => {
    const actualTypeName = step.currentNode && step.currentNode.typeName || ''
    expect(actualTypeName).toBe(EXPECTED_TYPE_NAME)
  })

  it(`dialog mode matches "${EXPECTED_DIALOG_MODE}"`, () => {
    const dialogs = step.dialogs.length ? step.dialogs : [{ mode: ''}]
    const actualDialogMode = dialogs[dialogs.length - 1].mode
    expect(actualDialogMode).toBe(EXPECTED_DIALOG_MODE)
  })

  it(`speech matches "${EXPECTED_SPEECH}"`, () => {
    const dialogs = step.dialogs || []
    let actualSpeech = ''
    for (let i = dialogs.length - 1; i >= 0; i--) {
      if (dialogs[i].channel === 'Speech') {
        actualSpeech = dialogs[i].text
        break
      }
    }
    expect(actualSpeech).toBe(EXPECTED_SPEECH)
  })

  it(`display matches "${EXPECTED_DISPLAY}"`, () => {
    const dialogs = step.dialogs || []
    let actualDisplay = ''
    for (let i = dialogs.length - 1; i >= 0; i--) {
      if (dialogs[i].channel === 'Text') {
        actualDisplay = dialogs[i].text
        break
      }
    }
    expect(actualDisplay).toBe(EXPECTED_DISPLAY)
  })
})
