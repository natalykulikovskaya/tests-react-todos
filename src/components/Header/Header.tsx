import className from './Header.module.scss';

export const Header = () => {
  return (
    <div className={className.container}>
      <span data-testid="text-header">Добро пожаловать. Ставьте цели и достигайте их!</span>
    </div>
  )
}