import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutProps } from "./type";
import className from './Layout.module.scss';

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={className.container}>
      <Header />
      {children}
      <Footer />
    </div>

  )
}