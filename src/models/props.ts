//Interface to inject the mobx store of books in all components
import { UserStore } from "../store/users.store";
export interface UserProps {
  UserStore?: UserStore
}

