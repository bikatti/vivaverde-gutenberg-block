/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

registerBlockType( 'gutenberg/glosasrio-block', {
	title: __( 'glosario' ),
	icon: 'universal-access-alt',
	category: 'common',
	keywords: [
		__( 'vivaverde' ),
		__( 'glosario' ),
		__( 'CGB' ),
	],
	attributes: {
		recordId: {
			type: 'number',
		},
		titulo: {
            type: 'array',
            source: 'children',
            selector: '.heading-body',
        },
		content: {
            type: 'array',
            source: 'children',
            selector: '.content-body',
        },
	},
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	edit: props => {
		const { attributes: { titulo, content }, setAttributes } = props
        const blockProps = useBlockProps();
		const onChangeTitulo =  titulo => setAttributes( { titulo } )
		const onChangeContenido =  content => setAttributes( { content } )

		return (
			<div { ...blockProps }>
				<RichText
					tagName="h3"
					onChange={ onChangeTitulo }
					placeholder={ __( 'Título' ) }
					value={ titulo }
				/>
				<RichText
					tagName="div"
					multiline="p"
					onChange={ onChangeContenido }
					placeholder={ __( 'Contenido de la palabra...' ) }
					value={ content }
				/>
			</div>
		);
    },
 
    save: props => {
		const { attributes: { titulo, content } } = props
        const blockProps = useBlockProps.save()

		return (
			<div { ...blockProps }>
				<h3 className="heading-body">
					{ titulo }
				</h3>
				<div className="content-body">
					{ content }
				</div>
			</div>
		);
    }
} );
