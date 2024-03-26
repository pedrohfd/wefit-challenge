import { SearchIcon } from '@/assets/icons/search'
import { Input, SearchInputRoot } from './style'

interface SearchInputProps {
  type: string
  placeholder: string
}

export const SearchInput = ({ placeholder, type }: SearchInputProps) => {
  return (
    <SearchInputRoot>
      <Input placeholder={placeholder} type={type} />

      <SearchIcon />
    </SearchInputRoot>
  )
}
