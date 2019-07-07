import React from 'react';
import img_eng from '../../img/eng_96.png';
import img_ru from '../../img/ru_96.png';
import './LangContent.css';

const introduction_text =
    <div>
        <p>Доброго дня!</p>
        <p>Як я вже писав, в мене взагалі немає досвіду роботи з 'React' і це мій додаток на 'React'. Тому я трішки затягнув з деплоєм. Я ще не докінця розумію як будувати саму структуру в 'React', тому будував навмання. З багатьма речами зіткнувся вперше, такими як асинхронність, стрілкові функції, heroku ... Та і на чистому JS я майже не писав. Я про це все писав у супроводжуючому листі до резюме.</p>
        <p>Але мені було цікаво! Мені сподобалось в цьому всьому розбиратись. В будь-якому випадку дякую Вам за таке адекватне і просте завдання, хоч я і вирішував його досить довго)</p>
        <p>Щоб продовжити - оберіть мову!</p>
    </div>;

class LangsContent  extends React.Component {
    render() {
        return (
            <div className={'langs_content'}>
                <div className="container">
                    {introduction_text}
                    <h1>Please select a language</h1>
                    <div className={'langs'}>
                        <div className={'lang'} data-value="en" onClick={this.props.changeLang}><img src={img_eng} width='96px' height='96px' alt=""/>English</div>
                        <div className={'lang'} data-value="ru" onClick={this.props.changeLang}><img src={img_ru} width='96px' height='96px' alt=""/>Русский</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LangsContent;