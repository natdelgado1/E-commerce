import { imagesURL } from "@/config";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {



  
  function format(num) {
    return (
      "Gs. " +
      Number.parseInt(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1")
    );
  }

    const router = useRouter();
    const loadProduct = (id)=>{
        router.push(`/store/products/${id}`)
    }

  return (
    <div className="w-52 mx-2 inline-block cursor-pointer" onClick={() => {loadProduct(product._id)}}>
      <div className="block h-[200px] overflow-hidden">
        <img 
          src={`${imagesURL}/products/${product._id}/principal.jpg`}
          alt={`Imagen de ${product.title}`}
        />
      </div>
      <div className="p-3">
      <p>{product.title}</p>
      <span className="font-bold">{format(product.price)}</span>
      </div>
    </div>
  );
}
