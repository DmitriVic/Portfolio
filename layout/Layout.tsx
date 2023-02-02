import s from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";
import { FunctionComponent, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { ModalMenu } from "../components/ModalMenu/ModalMenu";

import { ContextBgHeader } from "../components/context/context";
import { ModalInfoSite } from "../components/ModalInfoSite";
const Layout = ({  }: LayoutProps): JSX.Element => {
	//const ref = useRef<HTMLDivElement>()
	const [upBlockAboutme, setUpBlockAboutme] = useState<number | undefined>(0)
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [changeModal, setChangeModal] = useState<boolean>(true);
	//const ContextBgHeader = createContext(upBlockAboutme)

	//   console.log(typeof setModalActive);

	return (
		<>

			<ContextBgHeader.Provider value={upBlockAboutme}>
				<div className={s.wrapper}>
					{/* <TextComponent/> */}
					<Header
						className={s.header}
						modalActive={modalActive}
						setModalActive={setModalActive}
						setChangeModal={setChangeModal}

					/>
					<Main
						className={s.main}
						setUpBlockAboutme={setUpBlockAboutme}
					/>
					<Footer
						setChangeModal={setChangeModal}
						setModalActive={setModalActive}
						className={s.footer} />

					<Modal
						modalActive={modalActive}
						setModalActive={setModalActive}>

						{changeModal ? <ModalMenu
							modalActive={modalActive}
							setModalActive={setModalActive}
						/> : <ModalInfoSite />}
					</Modal>
				</div>
			</ContextBgHeader.Provider>

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



