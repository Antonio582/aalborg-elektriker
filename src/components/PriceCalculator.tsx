'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PriceCalculator() {
  const [chargerType, setChargerType] = useState<'basic' | 'smart' | 'dc'>('smart')
  const [cableLength, setCableLength] = useState(5)
  const [needsUpgrade, setNeedsUpgrade] = useState(false)

  const basePrices = { basic: 8500, smart: 14500, dc: 45000 }
  const cablePricePerMeter = 250
  const upgradePrice = 4500

  const totalPrice = basePrices[chargerType] + (cableLength * cablePricePerMeter) + (needsUpgrade ? upgradePrice : 0)

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-emerald-800 mb-6 font-[family-name:var(--font-jakarta)]">
        Beregn din ladestander-pris
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-3">Type ladestander</label>
          <div className="grid grid-cols-3 gap-3">
            {([['basic', 'Basis (3.7 kW)'], ['smart', 'Smart (11 kW)'], ['dc', 'DC Hurtig (50 kW)']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setChargerType(key)}
                className={`p-3 rounded-xl text-sm font-medium transition-all ${
                  chargerType === key
                    ? 'bg-emerald-800 text-white shadow-lg'
                    : 'bg-white/50 text-warm-700 hover:bg-white/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-700 mb-3">
            Kabellængde: {cableLength} meter
          </label>
          <input
            type="range"
            min={2}
            max={25}
            value={cableLength}
            onChange={(e) => setCableLength(Number(e.target.value))}
            className="w-full h-2 bg-warm-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-warm-400 mt-1">
            <span>2m</span>
            <span>25m</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={needsUpgrade}
              onChange={(e) => setNeedsUpgrade(e.target.checked)}
              className="w-5 h-5 rounded accent-emerald-600"
            />
            <span className="text-sm text-warm-700">
              Tavleopgradering nødvendig (+{upgradePrice.toLocaleString('da-DK')} kr.)
            </span>
          </label>
        </div>

        <motion.div
          key={totalPrice}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-emerald-800 rounded-xl p-6 text-center"
        >
          <div className="text-sm text-emerald-200 mb-1">Estimeret totalpris</div>
          <div className="text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
            {totalPrice.toLocaleString('da-DK')} kr.
          </div>
          <div className="text-xs text-emerald-300 mt-2">Inkl. installation • Ekskl. moms</div>
        </motion.div>

        <p className="text-xs text-warm-400 text-center">
          *Priserne er vejledende. Kontakt os for et præcist tilbud baseret på din specifikke installation.
        </p>
      </div>
    </div>
  )
}
