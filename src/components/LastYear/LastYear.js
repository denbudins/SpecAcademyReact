import React from 'react';
import LastYearImage from '../../assets/img/last-year.jpg';
import '../LastYear/LastYear.scss';

const LastYear = () => {
    return(
        <section class="lastYear">
            <section class="bigCards"> 
                <h2>FOI tjedan karijera 2019</h2>
                <div class="leftColumn">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod ipsum. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec augue at ipsum semper interdum sed et dui. Vestibulum maximus vitae neque sit amet accumsan. In hac habitasse platea dictumst. Quisque vitae dolor a dolor maximus convallis a eget lorem. Nam velit lacus, posuere id enim quis, molestie tincidunt dui. Pellentesque a porttitor erat.
                    </p>
                </div>
                <div class="rightColumn">
                    <figure>
                        <img src={LastYearImage} alt="Prošla godina"/>
                    </figure>
                </div>
            </section>
        </section>
    );
}

export default LastYear;