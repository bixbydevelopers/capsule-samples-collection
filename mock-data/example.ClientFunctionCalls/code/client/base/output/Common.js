export default function common(input) {
  let { $result } = input

  let contacts =  $result.map(contact => {
    return {
      "name": contact.nameInfo.firstName,
      "phoneNumber": contact.phoneInfos[0].number,
      "contactId": contact.contactId
    }
  })

  return contacts;
}
