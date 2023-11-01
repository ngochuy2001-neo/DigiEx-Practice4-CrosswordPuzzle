import { questionMapping } from '@/utils/helpers'
import { questions } from '@/utils/questions'
import Image from 'next/image'

export default function Home() {
  questionMapping(questions)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

    </div>
  )
}
