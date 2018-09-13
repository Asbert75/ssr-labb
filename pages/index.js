import { Component } from 'react';
import Link from 'next/link';

const isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class Index extends Component {
    render() {
        return (
            <div>
                <p>Hello World!</p>
                <Link href="/modify">
                    <a>Modify</a>
                </Link>
            </div>
        )
    }
}

export default Index