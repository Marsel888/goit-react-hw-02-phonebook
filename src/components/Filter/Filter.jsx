import { InputRe, LabelName } from '../style.styled'

export default function Filter({ value, onChange }) {
  return (
    <LabelName>
      Поиск по Имени
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Поиск "
      />
    </LabelName>
  )
}
