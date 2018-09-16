const isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Html = ( { title = "Hello from Next.js" }) => (
    <div>
        <h1>{title}</h1>
        <p>I'm already in love with you!</p>
        <h2><code>{isClientOrServer()}</code></h2>
    </div>
)

export default Html