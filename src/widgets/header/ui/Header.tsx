import { IconArrowIosDownOutline, IconFlagUnitedKingdom } from '@rocketweb-studio/ulens-ui-kit'

export const Header = () => {
  return (
    <header className='sticky top-0 h-[60px] border-b border-[var(--color-dark-300)] px-[60px] py-3 bg-[var(--color-dark-700)] z-10'>
      <div className='flex justify-between items-center'>
        <div>
          <span className='large '>Ulens</span>
          <span className='small_text'>Super</span>
          <span className='semi_bold_small_text'>Admin</span>
        </div>
        <div className='regular_text_16 h-[36px] border-1 border-[var(--color-dark-300)] flex items-center p-[12px]'>
          <IconFlagUnitedKingdom />
          <span className='pl-[12px] pr-[28px]'>English</span>
          <IconArrowIosDownOutline />
        </div>
      </div>
    </header>
  )
}
