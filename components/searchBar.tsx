import { Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SearchBar() {
  return (
    <div className="flex flex-row gap-3">
      <div className="relative w-full">
        <Input className="pr-10 w-80" placeholder="Buscar documentos" />
        <Search className="absolute right-3 top-1/3 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
      </div>
      <Button variant={"outline"}>
        <Filter className="mr-2 h-4 w-4" />
        Filtrar
      </Button>
    </div>
  );
}
