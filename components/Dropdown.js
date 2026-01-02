import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Dropdown({
  label,
  value,
  onChange,
  placeholder,
  items,
}) {
  return (
    <div className="mt-5">
      <Label className="mb-1">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="cursor-pointer w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item} className="cursor-pointer">
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
