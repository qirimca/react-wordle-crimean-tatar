import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Nasıl oynanır" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Sözü 6 deneme ile tapıñız. Er deneme soñra, karoçıqları rengi sözge qañcalıq yaqın olğanıñızı kösterir.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="correct"
        />
        <Cell value="I" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="P" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        K arifi sözde bar ve doğru yerde tura.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="S" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="Â" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        L arifi sözde bar amma yañış yerde tura.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="G" isCompleted={true} />
        <Cell value="Ü" isCompleted={true} />
        <Cell value="Z" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="L" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E arifi bu sözde iç bir yerde yoq.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Bu epimiz bilgen ve sevgen söz tapuv oyunınıñ açıq menba versiyası -{' '}
        <a
          href="https://github.com/qirimca/crimean-tatar-wordle"
          className="font-bold underline"
        >
          kodqa şu yerde baqıñız
        </a>{' '}
      </p>
    </BaseModal>
  )
}
