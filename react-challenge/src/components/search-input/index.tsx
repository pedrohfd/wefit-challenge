import { SearchIcon } from '@/assets/icons/search'
import { Button, Input, SearchInputRoot } from './style'

interface SearchInputProps {
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
}

export const SearchInput = ({
  placeholder,
  type,
  value,
  onChange,
  onBlur,
}: SearchInputProps) => {
  return (
    <SearchInputRoot>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />

      <Button>
        <SearchIcon onClick={onBlur} />
      </Button>
    </SearchInputRoot>
  )
}
