import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Ngeunaan Ulinan"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Keclap nyeate ulinan nebak kecap basa sunda, anu terinspirasi ku Wordle.
        Ieu ulinan kaasup proyek open source anu diinisiasi ku Akang{' '}
        <a
          href="https://github.com/cwackerfuss/"
          className="underline font-bold"
        >
          Chase Wackerfuss.
        </a>{' '}
        Aranjeun tiasa ningali sumber kode tina Keclap{' '}
        <a
          href="https://github.com/rifandyzv/wordle-sunda"
          className="underline font-bold"
        >
          di dieu,
        </a>{' '}
        sareng tiasa ningali sumber kode react-wordle{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          di dieu.
        </a>{' '}
      </p>
    </BaseModal>
  )
}
