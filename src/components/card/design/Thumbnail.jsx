import PropTypes from 'prop-types'

import {
  Span
} from '../../Typography'
import DynamicLink from '../../DynamicLink'
import Image from '../../Image'

import Box from '../../../layouts/Box'

function Thumbnail({
  title,
  slug,
  thumbnail
}) {
  return (
    <Box
      classes={[
        'card__thumbnail'
      ]}
    >
      <Image
        src={`http://localhost:1337${thumbnail}`}
        alt={title}
        classes={[
          'card__thumbnail-img'
        ]}
      />

      <DynamicLink
        path={`/collections/${slug}`}
        classes={[
          'card__thumbnail-link'
        ]}
      >
        <Span>{title}</Span>
      </DynamicLink>
    </Box>
  )
}

Thumbnail.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  thumbnail: PropTypes.url
}

export default Thumbnail
