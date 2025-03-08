import { processSteps } from '@/data/index'
import React from 'react'
import { Button } from '../components/ui/MovingBorders'

const Experience = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto flex flex-col items-center" id="Collaboration">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          Une approche <span className="text-purple">100% personnalisée</span> en 5 étapes
        </h2>
        <p className="text-center text-lg text-white mb-12">
          Comprendre en profondeur les besoins de de votre entreprise pour vous aider à scaler grace à des automatisations <span className="text-purple">100% personnalisée</span>.
        </p>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 justify-center items-center">
            {processSteps.map((card) => (
                <Button 
                    key={card.id}
                    borderRadius='1.75rem'
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <div className='flex-col items-center justify-center gap-4'>
                            <div className="flex items-center justify-center text-4xl font-bold">
                                <card.numberIcon className="text-4xl text-white" />
                            </div>
                        </div>
                        
                        <div className="lg:ms-5">
                            <h1 className="text-center text-xl md:text-2xl font-bold">
                                {card.title}
                            </h1>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>

    </div>
  )
}

export default Experience
