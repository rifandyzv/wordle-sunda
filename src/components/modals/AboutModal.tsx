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
        Ieu ulinan kaasup proyek open source anu dijieun ku akang Chase
        Wackerfuss. Aranjeun tiasa ningali sumber kode tina Keclap di dieu,
        sareng tiasa ningali sumber kode react-wordle di dieu. -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
