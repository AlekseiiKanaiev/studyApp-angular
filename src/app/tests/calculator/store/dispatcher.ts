import actions from './actions';
import { CalculatorService } from '../services/calculator.service';

const { MATH_SYMBOL, NUMBER } = actions;
const calcServ: CalculatorService = new CalculatorService();

function dispatcher(state = {value: '0'}, action) {
    switch (action.type) {
        case NUMBER: {
            calcServ.takeNum(action.value);
            return {...state, value: state.value = calcServ.getValue()};
        }
        case MATH_SYMBOL: {
            calcServ.takeSign(action.sign);
            return {...state, value: state.value = calcServ.getValue()};
        }
        default: {
            return state;
        }
    }
}

export default dispatcher;
