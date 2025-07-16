import { SketchPicker } from 'react-color'
import { useState } from 'react'
export default function SidebarPanel({ selectedColor, setSelectedColor }) {
  const [tab, setTab] = useState('Design')

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Soccer Jersey F3 Basic</h1>

      <div className="flex space-x-2 mb-4">
        {['Design', 'Colors', 'Text', 'Logos'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 rounded ${
              tab === t ? 'bg-black text-white' : 'bg-gray-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Design Tab (Sample only) */}
      {tab === 'Design' && (
        <p className="text-sm text-gray-600">Select a design layout (coming soon)</p>
      )}

      {/* ✅ Colors Tab */}
      {tab === 'Colors' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Choose Jersey Color</p>
          <SketchPicker
            color={selectedColor}
            onChange={(color) => setSelectedColor(color.hex)}
          />
        </div>
      )}

      {/* Text / Logo tabs can be added later */}
    </div>
  )
}
