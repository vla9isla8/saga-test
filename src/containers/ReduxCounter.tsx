import Counter, { CounterProps } from "../components/Counter";
import { connect } from "react-redux";
import { add, addAsync, reset } from "../redux/action/counter";
import { AppState } from "../redux/reducer";

const mapStateToProps = ({counter}:AppState) : Pick<CounterProps,"counter"> & Pick<CounterProps,"usedDelay"> => ({
    counter: counter ? counter.count : 0,
    usedDelay: counter && counter.usedDelay
});
const mapDispatchToProps: Pick<CounterProps,"add"> & Pick<CounterProps,"addAsync"> & Pick<CounterProps,"reset"> = {
    add,
    addAsync,
    reset
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);