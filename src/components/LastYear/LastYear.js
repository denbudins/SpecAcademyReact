import React from 'react';
import LastYearImage from '../../assets/img/last-year.jpg';
import {Section, BigCards, Naslov, LeftColumn, RightColumn, Slika} from './LastYearStyle';

const LastYear = () => {
    return(
        <Section>
            <BigCards>
                <Naslov>FOI tjedan karijera 2019</Naslov>
                <LeftColumn> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod ipsum. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec augue at ipsum semper interdum sed et dui. Vestibulum maximus vitae neque sit amet accumsan. In hac habitasse platea dictumst. Quisque vitae dolor a dolor maximus convallis a eget lorem. Nam velit lacus, posuere id enim quis, molestie tincidunt dui. Pellentesque a porttitor erat.</LeftColumn>
                <RightColumn>
                    <Slika src={LastYearImage} alt="Prošla godina"></Slika>
                </RightColumn>
            </BigCards>
        </Section>
    );
}

export default LastYear;