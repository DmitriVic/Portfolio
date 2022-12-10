import s from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";
import { FunctionComponent, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { TextComponent } from "../components/TextComponent/TextComponent";
import { ModalMenu } from "../components/ModalMenu/ModalMenu";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [mainBlockHeight, setMainBlockHeight] = useState<number | undefined>(0);


	//   console.log(typeof setModalActive);

	return (
		<>
			<div className={s.wrapper}>
				{/* <TextComponent/> */}
				<Header 
				className={s.header} 
				modalActive={modalActive}
				setModalActive={setModalActive}
				mainBlockHeight={mainBlockHeight}
				 />
				<Main 
				className={s.main} 
				setMainBlockHeight={setMainBlockHeight}
				/>
				<Footer className={s.footer} />
				{/* <button onClick={() => setModalActive(a => !a)}>sss</button> */}
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}>
				 
				 <ModalMenu 
				 modalActive={modalActive}
				 setModalActive={setModalActive}
				 />
		  </Modal>
			</div>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};



