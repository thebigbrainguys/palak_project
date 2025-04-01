import Link from "next/link"
import React from "react"

interface Category {
  name: string
  icon: string
  link: string
}

interface CategoryIconProps {
  category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <Link href={category.link} className="block text-center group">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-2 text-3xl bg-gray-100 rounded-full group-hover:bg-primary/10 transition-colors">
        <span role="img" aria-label={category.name}>
          {category.icon}
        </span>
      </div>
      <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
    </Link>
  )
}

