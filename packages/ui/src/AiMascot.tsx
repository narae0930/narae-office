import type { Lang } from '@genoffice/i18n'
import { LUMI_NARAE_PNG } from './lumi-narae-image'

/** The character's name and greeting above every editor's empty AI chat */
interface AiMascotStrings {
  name: string
  greeting: string
}

export const AI_MASCOT_STRINGS: Record<Lang, AiMascotStrings> = {
  zh: { name: 'AI 露米娜莱', greeting: '你好！我们一起来做文档吧？' },
  en: { name: 'AI Lumi-Narae', greeting: 'Hi! Shall we make a document together?' },
  ja: { name: 'AI ルミナレ', greeting: 'こんにちは！一緒に文書を作りましょうか？' },
  ko: { name: 'AI 루미나래', greeting: '반가워요! 함께 문서를 만들어 볼까요?' },
  fr: { name: 'IA Lumi-Narae', greeting: 'Bonjour ! On crée un document ensemble ?' },
  de: { name: 'KI Lumi-Narae', greeting: 'Hallo! Wollen wir zusammen ein Dokument erstellen?' },
  es: { name: 'IA Lumi-Narae', greeting: '¡Hola! ¿Creamos un documento juntos?' },
  th: { name: 'AI ลูมินาเร', greeting: 'สวัสดี! มาสร้างเอกสารด้วยกันไหม?' },
  id: { name: 'AI Lumi-Narae', greeting: 'Halo! Yuk, kita buat dokumen bersama?' },
  ru: { name: 'ИИ Луми-Нарэ', greeting: 'Привет! Создадим документ вместе?' },
  ar: { name: 'المساعد لومي ناراي', greeting: 'مرحبًا! هل ننشئ مستندًا معًا؟' },
  pt: { name: 'IA Lumi-Narae', greeting: 'Olá! Vamos criar um documento juntos?' },
  it: { name: 'IA Lumi-Narae', greeting: 'Ciao! Creiamo un documento insieme?' },
  pl: { name: 'AI Lumi-Narae', greeting: 'Cześć! Stworzymy razem dokument?' },
  cs: { name: 'AI Lumi-Narae', greeting: 'Ahoj! Vytvoříme spolu dokument?' },
  nl: { name: 'AI Lumi-Narae', greeting: 'Hallo! Zullen we samen een document maken?' },
  ms: { name: 'AI Lumi-Narae', greeting: 'Hai! Jom kita buat dokumen bersama?' },
  he: { name: 'AI לומי-נארה', greeting: 'שלום! ניצור מסמך יחד?' },
  hi: { name: 'AI लूमी-नारे', greeting: 'नमस्ते! क्या हम साथ मिलकर दस्तावेज़ बनाएँ?' },
  'zh-TW': { name: 'AI 露米娜萊', greeting: '你好！我們一起來做文件吧？' },
  vi: { name: 'AI Lumi-Narae', greeting: 'Xin chào! Mình cùng tạo tài liệu nhé?' },
}

/** The Lumi-Narae character and a speech bubble, shown while an AI chat is empty */
export function AiMascot({ lang }: { lang: Lang }) {
  const s = AI_MASCOT_STRINGS[lang] ?? AI_MASCOT_STRINGS.en
  return (
    <div
      className="ai-mascot"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 14,
      }}
    >
      <img src={LUMI_NARAE_PNG} alt={s.name} width={77} height={96} draggable={false} />
      <div
        dir="auto"
        style={{
          maxWidth: 170,
          padding: '8px 12px',
          borderRadius: 12,
          background: 'var(--accent-soft)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          fontSize: 12.5,
          lineHeight: 1.5,
          textAlign: 'start',
        }}
      >
        <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: 2 }}>{s.name}</div>
        {s.greeting}
      </div>
    </div>
  )
}
