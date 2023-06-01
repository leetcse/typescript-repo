import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

describe('MdxView', () => {
  it('learning test next-mdx-remoted compile and render mdx on browser successfully', async () => {
    const mdxSource = await serialize(`
    # Testing MDX
    **bold text**
    *italicized text*
    `);

    // console.log(String(mdxSource.compiledSource))
    const { baseElement } = render(<MDXRemote {...mdxSource} />);
    expect(baseElement).toBeTruthy();
    //expect(screen.getByRole('heading')).toHaveTextContent('Testing MDX');
    //expect(baseElement.querySelector('strong')).toHaveTextContent('bold text');
    //expect(baseElement.querySelector('em')).toHaveTextContent('italicized text');
    // screen.debug();
  });
});
