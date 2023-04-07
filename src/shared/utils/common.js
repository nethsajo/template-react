export const logger = ({ path, event, log }) => {
  const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
  console.log(`[${date}]: ${path} (${event}) >> `, JSON.stringify(log, null, 2));
};
