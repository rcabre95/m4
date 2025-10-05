import React from 'react'
import IconBackground from '../icons/IconBackground'
import Cross from '../icons/Cross'
import People from '../icons/People'
import Charity from '../icons/Charity'

interface IListCard {
    fields: {
        iconName?: string;
        title: string;
        description: string;
    }
}

interface IAboutProps {
    title: string;
    description: string;
    listCards: Array<IListCard>;
}

const getIconComponent = (iconName?: string) => {
  switch (iconName?.toLowerCase()) {
    case 'charity':
      return <Charity />
    case 'cross':
      return <Cross />
    case 'people':
      return <People />
    default:
      return <Cross /> // Default fallback icon
  }
}

export default function About({ title, description, listCards }: IAboutProps) {
  return (
    <section id="about" className="bg-white px-6 md:px-24 py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">{title}</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-8 text-muted-foreground text-gray-600">
            {description}
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            {listCards.map((card, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <IconBackground>
                        {getIconComponent(card.fields.iconName)}
                    </IconBackground>
                    <h3 className="mb-2 text-xl font-bold text-black">{card.fields.title}</h3>
                    <p className="text-muted-foreground text-gray-600">
                        {card.fields.description}
                    </p>
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}