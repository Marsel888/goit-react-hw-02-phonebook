import { ContactsItem, UlList, ButtonList } from '../style.styled'

export default function ContactList({ visibal, click }) {
  return (
    <ContactsItem>
      {visibal.map((concat) => (
        <UlList key={concat.id}>
          <li>
            {concat.names}:{concat.number}
          </li>
          <ButtonList onClick={() => click(concat.id)}>delete</ButtonList>
        </UlList>
      ))}
    </ContactsItem>
  )
}
