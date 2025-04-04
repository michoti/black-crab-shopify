import { CategoryCard } from "@/components/category-card"
import { getCategories } from "@/lib/algolia"
import { cn } from "@/utils/cn"

export async function CategoriesSection() {
  const { hits: categories } = await getCategories({
    hitsPerPage: 4,
    attributesToRetrieve: ["handle"],
  })

  if (!categories?.length) return null

  return (
    <div className="mt-20 bg-gray-50 px-4 py-20">
      <div className="mx-auto w-full max-w-container-sm space-y-4">
        <h2 className="mb-8 text-left text-4xl font-semibold">Featured Categories</h2>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
          {categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                className={cn("bg-white shadow-md md:shadow-none", {
                  "md:border-r": index === 0 || index === 2,
                  "md:border-l": index === 1 || index === 3,
                  "md:border-b": index === 0 || index === 1,
                  "md:border-t": index === 2 || index === 3,
                })}
                index={index + 3}
                {...category}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
