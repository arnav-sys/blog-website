import Main from "../screens/main"
import { addurlindex } from "../userSlice"

function mapStateToProps(state) {
    return state
}


export const Container = connect()(mapStateToProps
)(Main)