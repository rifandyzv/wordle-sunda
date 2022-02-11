import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara ulin" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Anjeun kedah nebak kecap dina 6 kali percobaan. Tiap tebakan, warna
        kotak hurup bakal berubah pikeun mere nyaho sakumaha akurat tebakan
        anjeun kanu jawaban kecap.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" status="correct" />
        <Cell value="A" />
        <Cell value="P" />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup K atos aya dina posisi anu leres.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" />
        <Cell value="C" />
        <Cell value="I" status="present" />
        <Cell value="N" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup I aya dina kecap, nanging dina posisi anu salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="M" />
        <Cell value="B" />
        <Cell value="O" status="absent" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup O teu aya dina kecap.
      </p>
    </BaseModal>
  )
}
