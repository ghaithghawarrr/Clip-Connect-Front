import PropTypes from 'prop-types';

export default function Stat({ number, context }) {
      return (
            <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">{number}</div>
                        <div className="text-sm text-gray-500">{context}</div>
                  </div>
            </div>
      );
};

Stat.propTypes = {
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      context: PropTypes.string.isRequired,
};
