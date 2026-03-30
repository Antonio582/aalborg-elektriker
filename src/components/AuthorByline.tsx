export default function AuthorByline({ date, modified }: { date: string; modified?: string }) {
  return (
    <div className="flex items-center gap-4 py-4 border-t border-b border-warm-200 my-6">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg font-[family-name:var(--font-jakarta)]">
        JN
      </div>
      <div>
        <div className="font-semibold text-warm-800 text-sm">
          Af <span className="text-emerald-700">Jakob Nielsen</span>, autoriseret el-installatør
        </div>
        <div className="text-xs text-warm-400 flex items-center gap-2">
          <span>Publiceret: {date}</span>
          {modified && <span>· Opdateret: {modified}</span>}
          <span>· Nordjysk Elektriker</span>
        </div>
      </div>
    </div>
  )
}
