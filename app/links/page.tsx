import type { Metadata } from 'next'
import LinksPage from '@/components/LinksPage'

export const metadata: Metadata = {
  title: 'Ronaldo Cantarelli — Links',
  description:
    'Psicanalista clínico, pastor e terapeuta cristão. Agende uma sessão, palestra ou pregação.',
}

export default function Page() {
  return <LinksPage />
}
