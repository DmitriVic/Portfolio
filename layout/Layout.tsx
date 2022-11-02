import s from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";
import { FunctionComponent, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { TextComponent } from "../components/TextComponent/TextComponent";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [modalActive, setModalActive] = useState<boolean>(false);
	//   console.log(typeof setModalActive);

	return (
		<>
			<div className={s.wrapper}>
				{/* <TextComponent/> */}
				<Header className={s.header} setModalActive={setModalActive} />
				<Main className={s.main} />
				<Footer className={s.footer} />
				{/* <button onClick={() => setModalActive(a => !a)}>sss</button> */}
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}>
				 <button onClick={() => setModalActive(a => !a)}>sss</button>
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



