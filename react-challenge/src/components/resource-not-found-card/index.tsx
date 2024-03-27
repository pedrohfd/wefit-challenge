import { Link } from 'react-router-dom'
import {
  ResourceNotFoundRoot,
  ResourceNotFoundMessage,
  ResourceNotFoundButton,
} from './style'
import ResourceNotFoundImage from '@/assets/images/resource-not-found.svg'

export const ResourceNotFoundCard = () => {
  return (
    <ResourceNotFoundRoot>
      <ResourceNotFoundMessage>
        Parece que não há nada por aqui :(
      </ResourceNotFoundMessage>

      <div>
        <img src={ResourceNotFoundImage} alt="resource not found" />
      </div>

      <Link to={'/'}>
        <ResourceNotFoundButton type="button">
          Recarregar página
        </ResourceNotFoundButton>
      </Link>
    </ResourceNotFoundRoot>
  )
}
