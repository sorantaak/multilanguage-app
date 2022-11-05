// import i18next from "./helpers/i18n";
import { useTranslation } from "react-i18next";

function App() {
	const { t, i18n } = useTranslation();

	const changeLang = (e) => {
		console.log(e.target.value);
		i18n.changeLanguage(e.target.value);
	};
	return (
		<div className="App">
			<select onChange={changeLang}>
				<option value="fa">farsi</option>
				<option value="en">english</option>
			</select>
			<h2>{t("hello")}</h2>
			<h2>{t("message", { m1: t("hello"), m2: t("bye") })}</h2>
		</div>
	);
}

export default App;
