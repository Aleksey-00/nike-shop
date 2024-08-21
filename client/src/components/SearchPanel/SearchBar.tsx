import './index.css'

interface IProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ label, value, onChange, placeholder }: IProps) {
  return <>
    <label>{label}</label>
    <input
      type="search"
      className="search-input"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
    />
  </>
}